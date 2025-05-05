const axios = require("axios");
const ExcelJS = require("exceljs");
const fs = require("fs").promises;
const path = require("path");

// Публичная ссылка на файл
const publicUrl = "https://disk.yandex.ru/i/20pGel9ZUI-MMA";
// Путь для сохранения JSON
const outputPath = path.join(__dirname, "../public/data/vacancies.json");
// Путь для кэша
const cachePath = path.join(__dirname, "../public/data/cache.json");

async function getDownloadUrl(publicKey) {
  try {
    const response = await axios.get(
      `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${publicKey}`
    );
    return response.data.href;
  } catch (error) {
    console.error("Ошибка при получении ссылки для скачивания:", error.message);
    throw error;
  }
}

async function downloadFile(url) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    return Buffer.from(response.data);
  } catch (error) {
    console.error("Ошибка при скачивании файла:", error.message);
    throw error;
  }
}

async function parseXlsx(buffer) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);
  const worksheet = workbook.worksheets[0];
  const data = [];

  // Предполагаем, что первая строка — заголовки
  const headers = worksheet.getRow(1).values.slice(1); // Пропускаем пустую ячейку
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // Пропускаем заголовки
    const rowData = {};
    row.values.slice(1).forEach((cell, index) => {
      rowData[headers[index]] = cell !== undefined ? String(cell) : "";
    });
    data.push(rowData);
  });

  return data;
}

async function checkCache() {
  try {
    const cache = await fs.readFile(cachePath, "utf-8");
    const { lastFetched } = JSON.parse(cache);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    return now - lastFetched < oneDay;
  } catch (error) {
    return false;
  }
}

async function updateCache() {
  const cacheData = { lastFetched: Date.now() };
  await fs.writeFile(cachePath, JSON.stringify(cacheData, null, 2));
}

async function main() {
  try {
    // Проверяем кэш
    const isCached = await checkCache();
    if (isCached) {
      console.log("Данные актуальны, обновление не требуется.");
      return;
    }

    // Получаем ссылку для скачивания
    const downloadUrl = await getDownloadUrl(publicUrl);
    // Скачиваем файл
    const fileBuffer = await downloadFile(downloadUrl);
    // Парсим XLSX
    const data = await parseXlsx(fileBuffer);
    // Сохраняем данные в JSON
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, JSON.stringify(data, null, 2));
    // Обновляем кэш
    await updateCache();
    console.log("Данные успешно обновлены и сохранены в", outputPath);
  } catch (error) {
    console.error("Ошибка в процессе обновления данных:", error.message);
  }
}

main();
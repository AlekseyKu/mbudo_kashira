// src\app\components\vk\vkUtil.ts
import { VKPost, VKPhoto, VKVideo } from './vkPostCard'

export const getVisualUrl = (post: VKPost): string => {
  const source = post.attachments?.length ? post : post.copy_history?.[0]
  const photo = source?.attachments?.find((a) => a.type === 'photo') as VKPhoto | undefined
  const video = source?.attachments?.find((a) => a.type === 'video') as VKVideo | undefined

  if (photo?.photo?.sizes?.length) {
    return photo.photo.sizes.sort((a, b) => b.width - a.width)[0].url
  } else if (video?.video?.image?.length) {
    return video.video.image.sort((a, b) => b.width - a.width)[0].url
  } else {
    return '/images/logo_main.png'
  }
}

export const getPostText = (post: VKPost): string => {
    return post.text || post.copy_history?.[0]?.text || 'Без текста'
  }
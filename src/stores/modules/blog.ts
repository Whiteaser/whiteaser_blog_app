import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Post,Tag } from '@/types/type'
export const useBlogStore = defineStore(
    'whiteaser_blog',
    () => {
        const token = ref('')
        const setToken = (newToken: string): void => {
            token.value = newToken
        }
        const postListInfo = ref<Post[]>([])
        const tagListInfo = ref<Tag[]>([])

        return { token, setToken, postListInfo, tagListInfo }
    },
    {
        persist: true,
    },
)

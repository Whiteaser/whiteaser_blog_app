import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlogStore = defineStore(
    'whiteaser_blog',
    () => {
        const token = ref('')
        const setToken = (newToken: string): void => {
            token.value = newToken
        }
        const test = ref('Hello, this is a test message from the blog store!')
        return { token, test, setToken }
    },
    {
        persist: true,
    },
)

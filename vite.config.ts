import { defineConfig } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

// 策略模式处理不同环境的配置
const envResolver = {
    build: () => {
        console.log('正在使用生产环境配置')
        return { ...viteBaseConfig, ...viteProdConfig }
    },
    serve: () => {
        console.log('正在使用开发环境配置')

        return { ...viteBaseConfig, ...viteDevConfig }
    },
}

export default defineConfig(({ command, mode }) => {
    console.log('当前环境:', mode)
    // const env = loadEnv(mode,process.cwd(),"")
    // console.log(env);

    return envResolver[command]()
})

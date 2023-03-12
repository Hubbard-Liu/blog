/*
 * @Author: Do not edit
 * @Date: 2023-03-12 22:24:19
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-03-12 22:34:46
 * @FilePath: /vue-press/docs/.vuepress/theme.js
 */
import { defaultTheme } from 'vuepress';

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '个人blog',
        children: [
          { text: "掘金", link: "https://juejin.cn/user/3888322280432189" },
          { text: "Github", link: "https://github.com/Hubbard-Liu" }
        ],
      }
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
}
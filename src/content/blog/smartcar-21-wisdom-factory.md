---
title: '21 届智能车 · 智慧工厂代码已上传'
description: 'ROS 工作空间 smartcar-21-wisdom-factory 仓库说明与克隆方式'
pubDate: 2026-08-28
heroImage: '../../assets/blog-placeholder-2.jpg'
---

比赛相关代码已推送到 GitHub：

**https://github.com/Aex724/smartcar-21-wisdom-factory**

## 仓库里有什么

- `ucar_ws1/src/`：功能包源码（导航、视觉、语音等）
- `ucar_ws1/gazebo_wsxunfei/`：Gazebo 仿真相关
- 构建产物 `build/`、`devel/` 等 **不会** 提交（已在 `.gitignore` 中排除）

## 克隆后注意

讯飞语音等资源体积较大，仓库内用 `.gitignore` 排除了部分目录。克隆后请阅读仓库中的 `docs/RESOURCES.md`，按说明从原工程补全资源后再编译。

## 和本博客的关系

博客只放 **说明与文章**；**完整代码**始终在 GitHub 仓库中维护。首页「项目」卡片也会链到该仓库。

## 介绍

这是玉川使用 vuepress 的 repo 主题搭建的 Blog。

[vuepress-theme-repo 主题地址](https://vuepress-theme-reco.recoluan.com/)

## deploy 自动部署到 GitHub

deploy.sh 主要功能是：

- 先`npm run build`打包博客到`dist`文件夹
- 然后删除`dist_push`文件夹下的除了`.git`的全部文章,不删除`.git` 是为了追踪到每一次提交。
- 把`dist`目录下的所有文件 拷贝到`dist_push`文件夹
- 把域名写到`dist_push`文件夹下的`CNAME`文件中
- 然后部署到 `Github` 预览仓库。

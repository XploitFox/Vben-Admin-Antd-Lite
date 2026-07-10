# Vben Admin Antd Lite

Vben Admin Antd Lite 是一个基于 [Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin) 精简而来的中后台前端模板。项目保留 Ant Design Vue 版本应用和本地 mock 后端，移除默认多应用、演示菜单、演示页面、演示接口和多余登录方式，适合作为真实业务系统的干净起点。

由于每次本人的完美主义与每次新项目都要重复精简操作与或许有人与我一样，该项目将深度清理沉淀为一个 Lite 版本 后续会继续按实际使用场景保持更新

## 预览

### 登录页

![登录页](./docs/img/login.png)

### 主界面

![主界面](./docs/img/main.png)

## 已精简内容

### 应用

只保留：

- `apps/web-antd`：Ant Design Vue 前端应用
- `apps/backend-mock`：本地 mock API 服务
- `apps/docs`：本地 Docs 文档

已移除：

- `playground`
- `web-antdv-next`
- `web-ele`
- `web-naive`
- `web-tdesign`

### 菜单与页面

- 移除项目、演示、系统等默认菜单和子菜单。
- 移除工作台页面及其相关 common-ui 组件。
- 保留分析页，并将分析页调整为一级菜单。
- 默认首页调整为 `/analytics`。

### 登录页

- 登录页固定为居中布局。
- 移除登录布局选择器。
- 移除创建账号入口。
- 移除手机号 / 验证码登录。
- 移除扫码登录。
- 移除第三方登录入口。
- 移除角色下拉选择器。

### 偏好设置与版权

- 移除“自定义偏好设置 / 实时预览”相关展示文案。
- 移除 ICP 备案号和 ICP 网站链接字段。
- 将版权配置改为环境变量控制：

```env
VITE_APP_COPYRIGHT_ENABLE=true
VITE_APP_COPYRIGHT_COMPANY_NAME=Vben
VITE_APP_COPYRIGHT_COMPANY_SITE_LINK=https://www.vben.pro
VITE_APP_COPYRIGHT_DATE=2024
```
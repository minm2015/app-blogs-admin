<style>
.am-layout {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 0;
    margin: auto;
}
.horizontal {
    flex-direction: row;
}
.am-header {
    text-align: center;
    line-height: 50px;
    background-color: #444;
}
.am-aside {
    width: 200px;
    background-color: white;
    line-height: 360px;
    text-align: center;
    background: #4a5064;
}
.am-main {
    flex: 1;
    background-color: #666;
    line-height: 320px;
    text-align: center;
}
.am-footer {
    background-color: #555;
    line-height: 40px;
    text-align: center;
}
.am-container{
    height: 100%;
    width: 100%;
    max-width: 100%;
}
.ivu-menu {
    width: 100% !important;
    color: white;
}
.ivu-menu-item-group{
    text-align:left;
}
.ivu-layout-sider-children, .ivu-menu{
    background: #4a5064;
}
.ivu-menu-vertical.ivu-menu-light:after{
    width: 0;
    background: #00c1de !important;
}
.ivu-menu-item-group > ul {
    margin: 0 !important;
}
.ivu-menu-item-active{
    background: #00c1de !important;
    color: white !important;
}
.ivu-menu-item:hover{
    background: #666;
    color: white !important;
}
.ivu-menu-item, .ivu-menu-item-group-title {
    font-size: 8px !important;
}
</style>
<template>
    <am-container custom-class="am-layout">
        <header class="am-header">Header</header>
        <am-container custom-class="am-layout horizontal">
            <aside class="am-aside">
                <Layout>
                    <Sider>
                        <Menu active-name="1">
                            <MenuGroup title="内容管理">
                                <MenuItem name="1">
                                    <Icon type="md-document" />
                                    文章管理
                                </MenuItem>
                                <MenuItem name="2">
                                    <Icon type="md-chatbubbles" />
                                    评论管理
                                </MenuItem>
                            </MenuGroup>
                            <MenuGroup title="统计分析">
                                <MenuItem name="3">
                                    <Icon type="md-heart" />
                                    用户留存
                                </MenuItem>
                                <MenuItem name="4">
                                    <Icon type="md-leaf" />
                                    流失用户
                                </MenuItem>
                            </MenuGroup>
                        </Menu>
                    </Sider>
                </Layout>
            </aside>
            <am-container custom-class="am-layout">
                <main class="am-main">
                    内容
                </main>
            </am-container>
        </am-container>
    </am-container>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>

</style>

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { usePermissStore } from "../store/permiss";
import Home from "../views/home.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: (to) => {
			const status = localStorage.getItem("user_status");
			if (status === "0") {
				return "/dashboard0";
			} else if (status === "1") {
				return "/dashboard1";
			} else {
				return "/dashboard2";
			}
		}
	},
	{
		path: "/",
		name: "Home",
		component: Home,
		children: [
			// 管理员
			{
				path: "/dashboard0",
				name: "dashboard0",
				meta: {
					title: "管理员系统首页",
					noAuth: true
				},
				component: () => import(/* webpackChunkName: "dashboard" */ "../views/dashboard.vue")
			},
			{
				path: "/system-task-display",
				name: "system-task-display",
				meta: {
					title: "任务列表",
					permiss: "01"
				},
				component: () => import(/* webpackChunkName: "system-menu" */ "../views/system/admin/task_display.vue")
			},
			{
				path: "/list_publish",
				name: "list_publish",
				meta: {
					title: "发布者管理",
					permiss: "02"
				},
				component: () => import(/* webpackChunkName: "system-role" */ "../views/system/admin/list_publish.vue")
			},
			{
				path: "/list_perform",
				name: "list_perform",
				meta: {
					title: "执行者管理",
					permiss: "03"
				},
				component: () => import(/* webpackChunkName: "system-role" */ "../views/system/admin/list_perform.vue")
			},

			{
				path: "/system-task-classfy",
				name: "system-task-classfy",
				meta: {
					title: "任务分类列表",
					permiss: "04"
				},
				component: () => import(/* webpackChunkName: "system-menu" */ "../views/system/admin/task_classfy.vue")
			},
			{
				path: "/system-task-wait",
				name: "system-task-wait",
				meta: {
					title: "待审核任务列表",
					permiss: "04"
				},
				component: () => import(/* webpackChunkName: "system-menu" */ "../views/system/admin/task_wait.vue")
			},

			//ToDo
			// 发布者
			{
				path: "/dashboard1",
				name: "dashboard1",
				meta: {
					title: "发布者系统首页",
					noAuth: true
				},
				component: () => import(/* webpackChunkName: "dashboard" */ "../views/dashboard.vue")
				// component: Home,
			},
			
			{
				path:"/manage_task",
				name:"manage_task",
				meta:{
					title:"管理任务",
					noAuth:true
				},
				component:() => import("../views/system/publisher/manage_task.vue"),
			},
			{
				path:"/publish_task",
				name:"publish_task",
				meta:{
					title:"发布任务",
					noAuth:true
				},
				component:() => import(/* webpackChunkName: "dashboard" */"../views/system/publisher/publish_task.vue"),
			},
			{
				path: "/publisher_info",
				name: "publisher_info",
				meta: {
					title: "发布者基本信息",
					noAuth: true
				},
				component:()=>import(/* webpackChunkName: "dashboard" */ "../views/system/publisher/base_info.vue" ),
			},
			{
				path: "/publisher_pwd",
				name: "publisher_pwd",
				meta: {
					title: "发布者修改密码",
					noAuth: true
				},
				component:()=>import(/* webpackChunkName: "dashboard" */ "../views/system/publisher/change_pwd.vue" ),
			},
			
			

			// 执行者
			{
				path: "/dashboard2",
				name: "dashboard2",
				meta: {
					title: "执行者系统首页",
					noAuth: true
				},
				component: () => import(/* webpackChunkName: "dashboard" */ "../views/dashboard.vue")
			},
			{
				path: "/mystar",
				name: "mystar",
				meta: {
					title: "我的收藏",
					noAuth: true
				},
				component: () => import(/* webpackChunkName: "system-role" */ "../views/system/performer/star.vue")
			},
			{
				path:"/done_task",
				name:"done_task",
				meta:{
					title:"已完成的任务",
					noAuth:true
				},
				component:() => import("../views/system/performer/done_task.vue")
			},
			{
				path:"/undo_task",
				name:"/undo_task",
				meta:{
					title:"未完成的任务",
					noAuth:true
				},
				component:() => import("../views/system/performer/undo_task.vue")
			},
			{
				path:"/bid_task",
				name:"bid_task",
				meta:{
					title:"我的竞标",
					noAuth:true
				},
				component:() => import("../views/system/performer/bid_task.vue")
			},
			{
				path: "/performer_info",
				name: "performer_info",
				meta: {
					title: "执行者基本信息",
					noAuth: true
				},
				component:()=>import(/* webpackChunkName: "dashboard" */ "../views/system/performer/base_info.vue" ),
			},
			{
				path: "/performer_pwd",
				name: "performer_pwd",
				meta: {
					title: "执行者密码",
					noAuth: true
				},
				component:()=>import(/* webpackChunkName: "dashboard" */ "../views/system/performer/change_pwd.vue" ),
			},

			// else
			{
				path: "/table",
				name: "basetable",
				meta: {
					title: "基础表格",
					permiss: "31"
				},
				component: () => import(/* webpackChunkName: "table" */ "../views/table/basetable.vue")
			},
			{
				path: "/table-editor",
				name: "table-editor",
				meta: {
					title: "可编辑表格",
					permiss: "32"
				},
				component: () => import(/* webpackChunkName: "table-editor" */ "../views/table/table-editor.vue")
			},
			{
				path: "/schart",
				name: "schart",
				meta: {
					title: "schart图表",
					permiss: "41"
				},
				component: () => import(/* webpackChunkName: "schart" */ "../views/chart/schart.vue")
			},
			{
				path: "/echarts",
				name: "echarts",
				meta: {
					title: "echarts图表",
					permiss: "42"
				},
				component: () => import(/* webpackChunkName: "echarts" */ "../views/chart/echarts.vue")
			},

			{
				path: "/icon",
				name: "icon",
				meta: {
					title: "图标",
					permiss: "5"
				},
				component: () => import(/* webpackChunkName: "icon" */ "../views/pages/icon.vue")
			},
			{
				path: "/ucenter",
				name: "ucenter",
				meta: {
					title: "个人中心"
				},
				component: () => import(/* webpackChunkName: "ucenter" */ "../views/pages/ucenter.vue")
			},
			{
				path: "/editor",
				name: "editor",
				meta: {
					title: "富文本编辑器",
					permiss: "291"
				},
				component: () => import(/* webpackChunkName: "editor" */ "../views/pages/editor.vue")
			},
			{
				path: "/markdown",
				name: "markdown",
				meta: {
					title: "markdown编辑器",
					permiss: "292"
				},
				component: () => import(/* webpackChunkName: "markdown" */ "../views/pages/markdown.vue")
			},
			{
				path: "/export",
				name: "export",
				meta: {
					title: "导出Excel",
					permiss: "34"
				},
				component: () => import(/* webpackChunkName: "export" */ "../views/table/export.vue")
			},
			{
				path: "/import",
				name: "import",
				meta: {
					title: "导入Excel",
					permiss: "33"
				},
				component: () => import(/* webpackChunkName: "import" */ "../views/table/import.vue")
			},
			{
				path: "/theme",
				name: "theme",
				meta: {
					title: "主题设置",
					permiss: "7"
				},
				component: () => import(/* webpackChunkName: "theme" */ "../views/pages/theme.vue")
			},
			{
				path: "/calendar",
				name: "calendar",
				meta: {
					title: "日历",
					permiss: "24"
				},
				component: () => import(/* webpackChunkName: "calendar" */ "../views/element/calendar.vue")
			},
			{
				path: "/watermark",
				name: "watermark",
				meta: {
					title: "水印",
					permiss: "25"
				},
				component: () => import(/* webpackChunkName: "watermark" */ "../views/element/watermark.vue")
			},
			{
				path: "/carousel",
				name: "carousel",
				meta: {
					title: "走马灯",
					permiss: "23"
				},
				component: () => import(/* webpackChunkName: "carousel" */ "../views/element/carousel.vue")
			},
			{
				path: "/tour",
				name: "tour",
				meta: {
					title: "分步引导",
					permiss: "26"
				},
				component: () => import(/* webpackChunkName: "tour" */ "../views/element/tour.vue")
			},
			{
				path: "/steps",
				name: "steps",
				meta: {
					title: "步骤条",
					permiss: "27"
				},
				component: () => import(/* webpackChunkName: "steps" */ "../views/element/steps.vue")
			},
			{
				path: "/form",
				name: "forms",
				meta: {
					title: "表单",
					permiss: "21"
				},
				component: () => import(/* webpackChunkName: "form" */ "../views/element/form.vue")
			},
			{
				path: "/upload",
				name: "upload",
				meta: {
					title: "上传",
					permiss: "22"
				},
				component: () => import(/* webpackChunkName: "upload" */ "../views/element/upload.vue")
			},
			{
				path: "/statistic",
				name: "statistic",
				meta: {
					title: "统计",
					permiss: "28"
				},
				component: () => import(/* webpackChunkName: "statistic" */ "../views/element/statistic.vue")
			}
		]
	},
	{
		path: "/login",
		meta: {
			title: "登录",
			noAuth: true
		},
		component: () => import(/* webpackChunkName: "login" */ "../views/pages/login.vue")
	},
	{
		path: "/register",
		meta: {
			title: "注册",
			noAuth: true
		},
		component: () => import(/* webpackChunkName: "register" */ "../views/pages/register.vue")
	},
	{
		path: "/reset-pwd",
		meta: {
			title: "重置密码",
			noAuth: true
		},
		component: () => import(/* webpackChunkName: "reset-pwd" */ "../views/pages/reset-pwd.vue")
	},
	{
		path: "/403",
		meta: {
			title: "没有权限",
			noAuth: true
		},
		component: () => import(/* webpackChunkName: "403" */ "../views/pages/403.vue")
	},
	{
		path: "/404",
		meta: {
			title: "找不到页面",
			noAuth: true
		},
		component: () => import(/* webpackChunkName: "404" */ "../views/pages/404.vue")
	},
	{ path: "/:path(.*)", redirect: "/404" }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	NProgress.start();
	const status = localStorage.getItem("user_status");
	const permiss = usePermissStore();

	if (!status && to.meta.noAuth !== true) {
		next("/login");
	} else if (typeof to.meta.permiss == "string" && !permiss.key.includes(to.meta.permiss)) {
		// 如果没有权限，则进入403
		next("/403");
	} else {
		next();
	}
});

router.afterEach(() => {
	NProgress.done();
});

export default router;

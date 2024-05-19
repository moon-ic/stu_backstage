import { Menus } from "@/types/menu";

export const menuData: Menus[] = [
	// 1.admin
	{
		id: "00",
		title: "首页",
		index: "/dashboard0",
		icon: "Odometer"
	},
	{
		id: "01",
		title: "任务分类管理",
		index: "1-1",
		icon: "HomeFilled",
		children: [
			{
				id: "011",
				pid: "1",
				index: "/system-task-classfy",
				title: "任务分类列表"
			}
		]
	},
	{
		id: "02",
		title: "发布者管理",
		index: "1-2",
		icon: "HomeFilled",
		children: [
			{
				id: "021",
				pid: "1",
				index: "/list_publish",
				title: "发布者列表"
			}
		]
	},
	{
		id: "03",
		title: "执行者管理",
		index: "1-3",
		icon: "HomeFilled",
		children: [
			{
				id: "031",
				pid: "1",
				index: "/list_perform",
				title: "执行者列表"
			}
		]
	},
	{
		id: "04",
		title: "任务管理",
		index: "1-4",
		icon: "HomeFilled",
		children: [
			{
				id: "041",
				pid: "1",
				index: "/system-task-display",
				title: "任务列表"
			},
			{
				id: "042",
				pid: "1",
				index: "/system-task-wait",
				title: "待审核任务列表"
			}
		]
	},

	// 2.publisher
	{
		id: "10",
		title: "首页",
		index: "/dashboard1",
		icon: "Odometer"
	},
	{
		id: "11",
		title: "任务分类管理",
		index: "1-1",
		icon: "HomeFilled",
		children: [
			{
				id: "111",
				pid: "1",
				index: "/system-task-classfy",
				title: "任务分类列表"
			}
		]
	},
	{
		id: "12",
		title: "发布者管理",
		index: "1-2",
		icon: "HomeFilled",
		children: [
			{
				id: "121",
				pid: "1",
				index: "/list_publish",
				title: "发布者列表"
			}
		]
	},
	{
		id: "13",
		title: "执行者管理",
		index: "1-3",
		icon: "HomeFilled",
		children: [
			{
				id: "131",
				pid: "1",
				index: "/list_perform",
				title: "执行者列表"
			}
		]
	},
	{
		id: "14",
		title: "任务212管理",
		index: "1-4",
		icon: "HomeFilled",
		children: [
			{
				id: "141",
				pid: "1",
				index: "/system-task-display",
				title: "任务列表"
			},
			{
				id: "142",
				pid: "1",
				index: "/system-task-wait",
				title: "待审核任务列表"
			}
		]
	},

	// 3.performer
	{
		id: "20",
		title: "首页",
		index: "/dashboard2",
		icon: "Odometer"
	},
	{
		id: "21",
		title: "任务分类管理",
		index: "1-1",
		icon: "HomeFilled",
		children: [
			{
				id: "211",
				pid: "1",
				index: "/system-task-classfy",
				title: "任务分类列表"
			}
		]
	},
	{
		id: "22",
		title: "发布者管理",
		index: "1-2",
		icon: "HomeFilled",
		children: [
			{
				id: "221",
				pid: "1",
				index: "/list_publish",
				title: "发布者列表"
			}
		]
	},
	{
		id: "23",
		title: "执行者管理",
		index: "1-3",
		icon: "HomeFilled",
		children: [
			{
				id: "231",
				pid: "1",
				index: "/list_perform",
				title: "执行者列表"
			}
		]
	},
	{
		id: "24",
		title: "任务212管理",
		index: "1-4",
		icon: "HomeFilled",
		children: [
			{
				id: "241",
				pid: "1",
				index: "/system-task-display",
				title: "任务列表"
			},
			{
				id: "242",
				pid: "1",
				index: "/system-task-wait",
				title: "待审核任务列表"
			}
		]
	},
	{
		id: "5",
		icon: "Guide",
		index: "/icon",
		title: "图标",
		permiss: "5"
	},
	{
		id: "7",
		icon: "Brush",
		index: "/theme",
		title: "主题"
	}
];

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
		icon: "Guide",
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
		icon: "Guide",
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
		icon: "Guide",
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
		title: "任务",
		index: "2-1",
		icon: "Collection",
		children: [
			{
				id: "111",
				pid: "2",
				index: "/manage_task",
				title: "管理任务"
			},
			{
				id: "112",
				pid: "2",
				index: "/publish_task",
				title: "发布任务"
			}
		]
	},
	{
		id: "12",
		title: "个人设置",
		index: "2-2",
		icon: "HomeFilled",
		children: [
			{
				id: "121",
				pid: "2",
				index: "/publisher_info",
				title: "基本信息"
			},
			{
				id: "122",
				pid: "2",
				index: "/publisher_pwd",
				title: "修改密码"
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
		title: "我的收藏",
		index: "/mystar",
		icon: "StarFilled",
	},
	{
		id: "22",
		title: "任务",
		index: "3-2",
		icon: "Collection",
		children: [
			{
				id: "224",
				pid: "3",
				index: "/choose_task",
				title: "选择任务"
			},
			{
				id: "221",
				pid: "3",
				index: "/done_task",
				title: "已完成的任务"
			},
			{
				id: "222",
				pid: "3",
				index: "/undo_task",
				title: "未完成的任务"
			},
			{
				id: "223",
				pid: "1",
				index: "/bid_task",
				title: "我的竞标"
			},
		]
	},
	{
		id: "23",
		title: "个人设置",
		index: "3-3",
		icon: "HomeFilled",
		children: [
			{
				id: "231",
				pid: "3",
				index: "/performer_info",
				title: "基本信息"
			},
			{
				id: "232",
				pid: "3",
				index: "/performer_pwd",
				title: "修改密码"
			}
		]
	},

	//else
	{
		id: "7",
		icon: "Brush",
		index: "/theme",
		title: "主题"
	}
];

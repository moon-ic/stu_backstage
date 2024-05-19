import { defineStore } from "pinia";

interface ObjectList {
	[key: string]: string[];
}

export const usePermissStore = defineStore("permiss", {
	state: () => {
		const defaultList: ObjectList = {
			admin: [
				// 管理员
				"00",
				"01",
				"011",
				"02",
				"021",
				"03",
				"031",
				"04",
				"041",
				"042",
				"5",
				"7"
			],
			publisher: [
				// 发布者
				"10",
				"11",
				"111",
				"12",
				"121",
				"13",
				"131",
				"14",
				"141",
				"142",
				"5",
				"7"
			],
			performer: [
				// 执行者
				"20",
				"21",
				"211",
				"22",
				"221",
				"23",
				"231",
				"24",
				"241",
				"242",
				"5",
				"7"
			]
		};
		const userStatus = localStorage.getItem("user_status");
		return {
			// status:1（管理员），2（发布者），3（执行者）
			key: (userStatus == "1" ? defaultList.admin : userStatus == "2" ? defaultList.publisher : defaultList.performer) as string[],
			defaultList
		};
	},
	actions: {
		handleSet(val: string[]) {
			this.key = val;
		}
	}
});

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
				"112",
				"12",
				"121",
				"122",
				"132",
				"131",
				"31",
				"32",
				'51',
				'52',
				"7"
			],
			performer: [
				// 执行者
				"20",
				"21",
				"22",
				"221",
				"222",
				"223",
				"224",
				"23",
				"231",
				"232",
				"31",
				"32",
				'51',
				'52',
				"7"
			]
		};
		const userStatus = localStorage.getItem("user_status");
		return {
			// status:0（管理员），1（发布者），2（执行者）
			key: (userStatus == "0" ? defaultList.admin : userStatus == "1" ? defaultList.publisher : defaultList.performer) as string[],
			defaultList
		};
	},
	actions: {
		handleSet(val: string[]) {
			this.key = val;
		}
	}
});

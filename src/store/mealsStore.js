import { defineStore }  from 'pinia'
import {computed, ref} from "vue";

// export const useMealsStore = defineStore("meals", {
//     state: () => {
//         return {
//             dataList:[
//                 {
//                     id: "1",
//                     title: "汉堡包",
//                     desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
//                     price: 12,
//                     img: "/images/meals/1.png"
//                 },
//                 {
//                     id: "2",
//                     title: "双层吉士汉堡",
//                     desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
//                     price: 20,
//                     img: "/images/meals/2.png"
//                 },
//                 {
//                     id: "3",
//                     title: "巨无霸",
//                     desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
//                     price: 24,
//                     img: "/images/meals/3.png"
//                 },
//                 {
//                     id: "4",
//                     title: "麦辣鸡腿汉堡",
//                     desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
//                     price: 21,
//                     img: "/images/meals/4.png"
//                 },
//                 {
//                     id: "5",
//                     title: "板烧鸡腿堡",
//                     desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
//                     price: 22,
//                     img: "/images/meals/5.png"
//                 },
//                 {
//                     id: "6",
//                     title: "麦香鸡",
//                     desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
//                     price: 14,
//                     img: "/images/meals/6.png"
//                 },
//                 {
//                     id: "7",
//                     title: "吉士汉堡包",
//                     desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
//                     price: 12,
//                     img: "/images/meals/7.png"
//                 }
//             ],
//
//             keyword: "",
//         }
//     },
//
//     getters: {
//         filterData: (state) => {
//
//             if (!state.keyword) {
//                 return state.dataList
//             }
//
//             return state.dataList.filter(item => {
//                 return item.title.includes(state.keyword)
//             })
//         }
//     }
// })

export const useMealsStore =  defineStore("meals", () => {

    const dataList = ref([
        {
            id: "1",
            title: "汉堡包",
            desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
            price: 12,
            img: "./images/meals/1.png"
        },
        {
            id: "2",
            title: "双层吉士汉堡",
            desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
            price: 20,
            img: "./images/meals/2.png"
        },
        {
            id: "3",
            title: "巨无霸",
            desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
            price: 24,
            img: "./images/meals/3.png"
        },
        {
            id: "4",
            title: "麦辣鸡腿汉堡",
            desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
            price: 21,
            img: "./images/meals/4.png"
        },
        {
            id: "5",
            title: "板烧鸡腿堡",
            desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
            price: 22,
            img: "./images/meals/5.png"
        },
        {
            id: "6",
            title: "麦香鸡",
            desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
            price: 14,
            img: "./images/meals/6.png"
        },
        {
            id: "7",
            title: "吉士汉堡包",
            desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
            price: 12,
            img: "./images/meals/7.png"
        }
    ])

    const keyword = ref("")

    // 获取查询 关键字后的结果
    const filterData = computed(() => {

        if (!keyword.value) {
            return dataList.value
        }

        return dataList.value.filter(item => {
            return item.title.includes(keyword.value)
        })

    })

    // 增加商品数量
    const addCount = (meal) => {
        if (isNaN(meal.count)) {
            meal.count = 0
        }
        meal.count++
    }

    // 减少商品数据
    const subCount = (meal) => {
        if (meal.count <= 0) {
            return
        }
        meal.count--
    }

    // 获取购物车中所有的商品
    const cartList = computed(() => {

        return dataList.value.filter(item => {
            return item.count > 0
        })

    })

    // 计算商品总数
    const totalCount = computed(() => {
        if (!cartList.value.length) {
            return 0
        }
        return cartList.value.reduce((pre, cur) => {
            return pre + cur.count
        }, 0)
    })

    // 计算商品的总价
    const totalAmount = computed(() => {
        if (!cartList.value.length) {
            return 0
        }
        return cartList.value.reduce((pre, cur) => {
            return pre + cur.price * cur.count
        }, 0)
    })


    return {
        dataList,
        keyword,
        filterData,
        addCount,
        subCount,
        totalCount,
        cartList,
        totalAmount
    }
})


# 荒野绿洲

## 项目简介

“荒野绿洲”是一家拥有8间豪华木屋的小型精品酒店

他们需要一个定制的应用程序来管理酒店的一切:预订、房间和客人

这是酒店内部使用的应用程序，用于在客人到达时为其办理入住手续

## 需求分析

- 该应用程序的用户是酒店员工。它们需要**登录**到应用程序中才能执行任务
- 新用户需要在应用程序内**注册**(以保证只有真正的酒店员工才能获得帐户)
- 用户能够上传头像，并更改他们的用户名和密码
- App需要一个包含所有**客房的表格视图**，显示客房照片、名称、面积、价格和当前折扣
- 用户应该能够**更新或删除客房**，并**创建**新的客房(包括上传照片)
- App需要一个包含所有**预订的表格视图**，显示到达和离开日期、状态和支付金额，以及客房和客人数据
- 预订状态可以是“未确认”(已预订但尚未入住)、“入住”或“退房”。该表应该可以通过这个状态进行过滤
- 其他预订数据包括:客人数量、入住天数、客人意见、是否预订早餐、早餐价格
- 用户能够在客人到达时删除或更改预订状态
- 客人到达时，预订可能尚未付款。因此，在入住时，用户需要接受付款(应用外)，然后确认已收到付款(应用内)。
- 在入住时，客人应该可以在整个入住期间添加早餐，如果他们之前没有添加的话

- 客人资料应包括:姓名、电子邮件、身份证、国籍和国旗，以便于识别
- 最初的应用屏幕应该是一个仪表盘，用于显示过去7天、30天或90天的重要信息 :
  - 当天入住和退房的客人名单。
  - 统计最近的预订、销售、入住和入住率
  - 显示所有酒店每日销售额的图表，显示“总”销售额和“额外”销售额(目前仅为早餐)
  - 显示住宿时间统计数据的图表，因为这是酒店的一个重要指标
- 用户能够定义一些应用程序范围内的设置: 早餐价格，预定时间上下限，入住人数上下限
- dark mode

## 技术选型

- 路由: React Router
- 样式: styled components
- 远程状态管理: React Query
- UI 状态管理: Context API
- 表单管理: React Hook Form
- 图标: React icons 
- 提示: React hot toast
- 图表: Recharts 
- 日期: date-fns
- 后端: Supabase
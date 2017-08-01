<template>
  <div class="add-shop">
    <el-row style="margin-bottom: 50px;">
    	<el-col :span="12" :offset="4">
			<el-form :model="formData" :rules="rules" ref="formData" label-width="110px"> 
				<el-form-item label="店铺名称" prop="name">
					<el-input v-model="formData.name"></el-input>
				</el-form-item>
				<el-form-item label="详细地址" prop="address">
					<el-input v-model="formData.address"></el-input>
					<span>当前城市：北京</span>
				</el-form-item>
				<el-form-item label="联系电话" prop="phone">
					<el-input v-model.number="formData.phone" maxLength="11"></el-input>
				</el-form-item>
				<el-form-item label="店铺简介" prop="description">
					<el-input v-model="formData.description"></el-input>
				</el-form-item>
				<el-form-item label="店铺标语" prop="promotion_info">
					<el-input v-model="formData.promotion_info"></el-input>
				</el-form-item>
				<el-form-item label="店铺分类">
					<el-cascader
						:options="categoryOptions"
						v-model="selectedCategory"
						expand-trigger="hover"
					></el-cascader>
				</el-form-item>
				<el-form-item label="店铺特点" style="white-space: nowrap;">
					<span>品牌保证</span>
					<el-switch on-text="" off-text="" v-model="formData.is_premium"></el-switch>
					<span>蜂鸟专送</span>
					<el-switch on-text="" off-text="" v-model="formData.delivery_mode"></el-switch>
					<span>新开店铺</span>
					<el-switch on-text="" off-text="" v-model="formData.new"></el-switch>
				</el-form-item>
				<el-form-item style="white-space: nowrap;">
					<span>外卖保</span>
					<el-switch on-text="" off-text="" v-model="formData.bao"></el-switch>
					<span>准时达</span>
					<el-switch on-text="" off-text="" v-model="formData.zhun"></el-switch>
					<span>开发票</span>
					<el-switch on-text="" off-text="" v-model="formData.piao"></el-switch>
				</el-form-item>
				<el-form-item label="配送费" prop="float_delivery_fee">
					<el-input-number v-model="formData.float_delivery_fee" :min="0" :max="20"></el-input-number>
				</el-form-item>
				<el-form-item label="起送价" prop="float_minimum_order_amount">
					<el-input-number v-model="formData.float_minimum_order_amount" :min="0" :max="100"></el-input-number>
				</el-form-item>
				<el-form-item label="营业时间" style="white-space: nowrap;">
					<el-time-select
						placeholder="起始时间"
						v-model="formData.startTime"
						:picker-options="{
						start: '05:30',
						step: '00:15',
						end: '23:30'
						}">
					</el-time-select>
					<el-time-select
						placeholder="结束时间"
						v-model="formData.endTime"
						:picker-options="{
						start: '05:30',
						step: '00:15',
						end: '23:30',
						minTime: formData.startTime
						}">
					</el-time-select>
				</el-form-item>
				<el-form-item label="上传店铺头像">
					<el-upload
						class="avatar-uploader"
						:show-file-list="false"
						<img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-form-item>
				<el-form-item label="上传营业执照">
					<el-upload
						class="avatar-uploader"
						:show-file-list="false"
						<img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-form-item>
				<el-form-item label="优惠活动">
					<el-select v-model="activityValue" >
						<el-option
						    v-for="item in options"
						    :key="item.value"
						    :label="item.label"
						    :value="item.value">
					 	</el-option>
					</el-select>
				</el-form-item>
				<el-table
					:data="activities"
					style="min-width: 600px;margin-bottom: 20px;"
					align="cneter"
					>
					<el-table-column
					prop="icon_name"
					label="活动标题"
					align="cneter"
					width="120">
					</el-table-column>
					<el-table-column
					prop="name"
					label="活动名称"
					align="cneter"
					width="120">
					</el-table-column>
					<el-table-column
					prop="description"
					align="cneter"
					label="活动详情">
					</el-table-column>
					<el-table-column 
					label="操作" 
					width="120">
						<template scope="scope">
						    <el-button
						    size="small"
						    type="danger"
						    @click="handleDelete(scope.$index)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-form-item class="button_submit">
					<el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
				</el-form-item>
			</el-form>
    	</el-col>
    </el-row>	
  </div>
</template>

<script>
export default {
  name: 'addShop',
  data () {
    return {
      formData: {
			name: '', //店铺名称
			address: '', //地址
			latitude: '',
			longitude: '',
			description: '', //介绍
			phone: '',
			promotion_info: '',
			float_delivery_fee: 5, //运费
			float_minimum_order_amount: 20, //起价
			is_premium: true,
			delivery_mode: true,
			new: true,
			bao: true,
			zhun: true,
			piao: true,
			startTime: '',
	       	endTime: '',
	       	image_path: '',
	       	business_license_image: '',
	       	catering_service_license_image: ''	
		},
		rules: {
			name: [
				{ required: true, message: '请输入店铺名称', trigger: 'blur' },
			],
			address: [
				{ required: true, message: '请输入详细地址', trigger: 'blur' }
			],
			phone: [
				{ required: true, message: '请输入联系电话' },
				{ type: 'number', message: '电话号码必须是数字' }
			]
		},
		options: [{
		   value: '满减优惠',
		   label: '满减优惠'
		}, {
		   value: '优惠大酬宾',
		   label: '优惠大酬宾'
		}, {
		   value: '新用户立减',
		   label: '新用户立减'
		}, {
		   value: '进店领券',
		   label: '进店领券'
		}],
		activityValue: '满减优惠',
		activities: [{
		    icon_name: '减',
		    name: '满减优惠',
		    description: '满30减5，满60减8',
		}],
		categoryOptions: [
			{
				value: 'kuaican',
				label: '快餐便当',
				children:[{
					value: 'jiancan',
					label: '简餐'
				}]
			}
		],
		selectedCategory: ['kuaican', 'jiancan']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../common/less/config';
.button_submit{
	display: flex;
	justify-content:center;
}
</style>

<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <div class="group" ref="name">
          <input type="text" v-model="form.name"
            @blur="blur('name')" @keydown="keydown('name')"
          />
          <label>顧客名稱</label>
          <span>必填</span>
        </div>

        <div class="group" ref="address">
          <input type="text" v-model="form.address"
            @blur="blur('address')" @keydown="keydown('address')"
          />
          <label>送貨地址</label>
          <span>必填</span>
        </div>

        <div class="group" ref="tel">
          <input type="tel" v-model="form.tel" maxlength="8"
            @blur="blur('tel')" @keydown="keydown('tel')" @input="input('tel')"
          />
          <label>電話號碼</label>
          <span>需要正確電話格式</span>
        </div>

        <div class="group" ref="email">
          <input type="email" v-model="form.email"
            @blur="blur('email')" @keydown="keydown('email')"
          />
          <label>電郵地址</label>
          <span>需要正確電郵格式</span>
        </div>

        <div class="btn-container">
          <div class="btn-cancel" @click="toPreviousPage">
            <i class="el-icon-back"></i>
            <p>取消</p>
          </div>
          <div class="btn-reset" @click="resetForm">
            <p>重新輸入</p>
          </div>
          <div class="btn-submit" @click="submit">
            <p>送出訂單</p>
            <i class="el-icon-check"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        address: '',
        tel: '',
        email: '',
      },
    };
  },
  methods: {
    input(target) {
      const group = this.$refs[target].children;
      const telRule = /^[0-9]{8}$/;

      if (this.form.tel.match(telRule)) {
        this.changeStyle(group, 'isActive');
      } else {
        this.changeStyle(group, 'hasError');
      }
    },
    blur(target) {
      const group = this.$refs[target].children;

      if (this.form[target] === '') {
        this.changeStyle(group, 'hasError');
      } else if (target === 'email' || target === 'tel') {
        this.sameVerify(target, group);
      } else {
        this.changeStyle(group, 'isActive');
      }
    },
    keydown(target) {
      const group = this.$refs[target].children;

      if (window.event.keyCode === 8 && this.form[target] === '') {
        this.changeStyle(group, 'hasError');
      } else if (window.event.keyCode === 8 && this.form[target].length === 1) {
        this.changeStyle(group, 'hasError');
      } else if (target === 'email' || target === 'tel') {
        this.sameVerify(target, group);
      } else {
        this.changeStyle(group, 'isActive');
      }
    },
    sameVerify(target, group) {
      const telRule = /^[0-9]{8}$/;
      // eslint-disable-next-line no-useless-escape
      const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      if (target === 'email') {
        if (this.form.email.search(emailRule) !== -1) {
          this.changeStyle(group, 'isActive');
        } else {
          this.changeStyle(group, 'hasError');
        }
      } else if (target === 'tel') {
        if (this.form.tel.match(telRule)) {
          this.changeStyle(group, 'isActive');
        } else {
          this.changeStyle(group, 'hasError');
        }
      }
    },
    changeStyle(group, status) {
      const g = group;

      if (status === 'isActive') {
        g[0].style.border = '0.125rem solid #4caf50';
        g[1].style.cssText = 'color: #4caf50; top: 0; left: 0; font-size: 0.8rem;';
        g[2].style.display = 'none';
      } else if (status === 'hasError') {
        g[0].style.border = '0.125rem solid #ff5252';
        g[1].style.cssText = 'color: #ff5252; top: 0; left: 0; font-size: 0.8rem;';
        g[2].style.display = 'block';
      }
    },
    toPreviousPage() {
      this.$router.go(-1);
    },
    resetForm() {
      this.form.name = '';
      this.form.address = '';
      this.form.tel = '';
      this.form.email = '';

      const groupArr = [...document.querySelectorAll('.group')];
      groupArr.forEach((item) => {
        const dom = item.children;
        dom[0].style.border = '0.125rem solid #999';
        dom[1].style.cssText = 'color: #999; top: 0.75rem; left: 0.375rem; font-size: 1rem;';
        dom[2].style.display = 'none';
      });
    },
    submit() {
      if (this.form.name !== '' && this.form.address !== '') {
        this.$router.push('/thx').catch(() => {});
      } else {
        alert('姓名與地址請務必填寫唷');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/_delivery.scss';
</style>

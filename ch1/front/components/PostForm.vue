<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
          v-model="content"
          outline
          auto-grow
          clearable
          label="쓸 내용은?"
          :hide-details="hideDetails"
          :sucess-messages="successMessages"
          :success="success"
          :rules="[v => !!v.trim() || '내용을 입력하세요']"
          @input="onChangeTextarea"
        />
      </v-form>
      <v-btn type="submit" color="green" absolute right>확인</v-btn>
      <v-btn>이미지 업로드</v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      valid: false,
      hideDetails: true,
      successMessages: '',
      success: false,
      content: '',
    }
  },
  computed: {
    ...mapState('users', ['me']),
  },
  methods: {
    onChangeTextarea() {
      this.hideDetails = true;
      this.success = false;
      this.successMessages = '';
    },
    onSubmitForm() {
      if(this.$refs.form.validata()){
        this.$store.dispatch('post/add', {
          content: this.content,
          User: {

          },
          Comments: [],
          Images: [],
          id: Data.now(),
          createAt: Date.now(),
        })
        .then(() => {
          this.hideDetails = false;
          this.success = true;
          this.successMessages = '게시글 등록 성공';
        })
        .catch(() => {

        });
      }
    },
  }
}
</script>

<style>

</style>
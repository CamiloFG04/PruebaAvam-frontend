<script lang="ts" setup>
import { ref } from 'vue';
import useAuth from '../composables/useAuth';

const email = ref('test@test.com');
const password = ref('1234qwerty');
const { onSubmit } = useAuth();
</script>

<template>
  <div class="column">
    <div class="row">
      <h5 class="text-h5 text-white q-my-md">Store SAS</h5>
    </div>
    <div class="row">
      <q-card flat bordered class="q-pa-lg shadow-1">
        <q-card-section>
          <q-form class="q-gutter-md" @submit="onSubmit(email, password)">
            <q-input
              square
              filled
              clearable
              v-model="email"
              type="email"
              label="email"
            />
            <q-input
              square
              filled
              clearable
              v-model="password"
              type="password"
              label="password"
            />
            <q-card-actions class="q-px-md">
              <q-btn
                unelevated
                color="light-blue-5"
                size="lg"
                class="full-width"
                label="Login"
                type="submit"
              />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.q-card {
  width: 360px;
}
</style>

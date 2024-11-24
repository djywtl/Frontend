import { createRouter, createWebHashHistory } from 'vue-router'
import OverviewView from '@/views/OverviewView.vue'
import QuestionsView from '@/views/Questions/QuestionsView.vue'
import SettingsView from '@/views/SettingsView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import EntryView from '@/views/EntryView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import AnswerView from '@/views/Questions/AnswerView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'entry',
      component: EntryView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewView,
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView,
      children: [
        {
          path: ':id',
          name: 'answer',
          component: AnswerView,
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfileView,
    },
  ],
})

export default router
import { OrderType } from './types/types';
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220704T125756Z&X-Amz-Expires=86400&X-Amz-Signature=040e6cb9b4c9abbfd4cc0c0d0f1153a751bbb7c94c04a9d698d8412961f5212e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22&x-id=GetObject'
})


export const ordersAPI = {
  getOrders() {
    return instance.get<OrderType[]>('')
  }
}
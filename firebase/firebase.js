/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDd8DzqTodXGJHF_WGc7_qMcDNZom2zoCc",
  authDomain: "expense-tracker-6819d.firebaseapp.com",
  projectId: "expense-tracker-6819d",
  storageBucket: "expense-tracker-6819d.appspot.com",
  messagingSenderId: "966342271883",
  appId: "1:966342271883:web:4d6380962c2d460933058e",
  measurementId: "G-M2B6K9VEDF"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
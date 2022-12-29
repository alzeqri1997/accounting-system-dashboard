import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const language = ref(localStorage.getItem("language") || "ar");

  function changeLanguage(prevLanguage) {
    language.value = prevLanguage
    localStorage.setItem("language", prevLanguage);
  }

  return { language, changeLanguage };
});

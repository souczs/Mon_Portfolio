<template>
    <div class="modal__overlay" @click.self="close">
      <div class="modal__item">
        <h2 class="modal__title">{{ project.title }}</h2>
        <p class="modal__date"><strong>Date</strong> {{ project.date }}</p>
        <p class="modal__code"><strong>Code</strong> {{ project.code }}</p>
        <p class="modal__link">Projet accessible <a :href="project.lien" target="_blank">ici</a></p>
        <button @click="close" class="modal__close">Fermer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>

  .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333333d3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal__item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 600px;
    text-align: center;
    z-index: 1001;
  }
  
  .modal__link a {
    color:black;
    font-weight:bold;
  }

  .modal__close {
    padding: 8px 12px;
    border: none;
    background: #c8af7d;
    color: #5a4f39;
    border-radius: 4px;
    cursor: pointer;
  }
  .modal__close:hover {
    background: #5a4f39;
    color:#c8af7d;
  }

  </style>
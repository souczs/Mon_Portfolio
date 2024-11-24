<template>
    <body class="project">
        <h1 class="project__title">MES PROJETS</h1>
            <div v-for="project in projects" :key="project.id" class="project__item">
                <img src="../assets/img/logo-projet.png"  :alt="project.title" class="project__image" @click="openModal(project)"/>
                <h2 class="project__name">{{project.title}}</h2>
            </div>
  
      <Modal
        v-if="showModal"
        :project="selectedProject"
        @close="closeModal"
      />
    </body>
  </template>

<style scoped>

.project {
    height:800px;
    padding-top:120px;
    padding-left:300px;
    padding-right:300px;
    background:#c8af7d42;
    text-align:center;
    line-height: 3em;
}

.project__title {
    font-size:3em;
    padding-bottom:60px;
}

.project__item {
    padding-bottom:30px;
    display:flex;
    align-items:center;
    gap:30px;
}

.project__image {
    height:130px;
    width:130px;
    border-radius:10%;
    cursor: pointer;
}
.project__image:hover {
    box-shadow: 0.5em 0.5em 5px #c8af7d;
}

.project__item img:hover + h2 {
    border-bottom: solid 0.2em #c8af7d;
}

</style>
  
<script>
import Modal from '../components/Modal.vue';
  
export default {
    components: { Modal },
    data() {
      return {
        projects: [
          { id: 1,
            title: 'MON CV',
            date: '22/09/2024',
            code: 'HTML & CSS',
            lien: 'https://github.com/souczs/Mon_CV'},
          { id: 2,
            title: 'DYNAMISER UN ESPACE COMMENTAIRE',
            date: '24/11/2024',
            code: 'HTML & JS',
            lien: 'https://github.com/souczs/DynamiserEspaceComm.git' },
        //   { id: 3,
        //     title: 'Nom du projet',
        //     date: 'Date du projet',
        //     code: 'Langage du projet',
        //     lien: 'Lien du projet' },
        ],
        showModal: false,
        selectedProject: null
      };
    },
    methods: {
      openModal(project) {
        this.selectedProject = project;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedProject = null;
      }
    }
  };
</script>


<script>

import testMd from '../assets/test.md';
import {VueShowdown} from 'vue-showdown';

export default {
  name: 'ReadFile',
  props: {
    content: String,
  },
  data: function() {
    return {
      fileContent: null,
    };
  },
  created: function() {
    this.loadData()
  },
  methods: {
    loadData() {
      fetch(testMd)
        .then(row => row.text())
        .then(text => {
          console.log('text:', text);
          this.fileContent = text;
        });
    },
  }
}
</script>

<template>
  <h1>ReadFile Component - Tô Minh Tiến</h1>
  <VueShowdown :markdown="fileContent"></VueShowdown>
</template>
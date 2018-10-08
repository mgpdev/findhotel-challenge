<template>
  <div>
    <ul class="pa-0 mt-2">
      <li
        :style="{ 'background-color': isSelected('any') ? bgColor : 'transparent' }"
        :class="{ 'active': isSelected('any') }"      
        @click="setOption('any')">
        Any
      </li>      
      <li
        v-for="op in options"
        :key="op"
        :style="{ 'background-color': isSelected(op) ? bgColor : 'transparent' }"
        :class="{ 'active': isSelected(op) }"
        @click="setOption(op)">
        {{ op }}<v-icon v-if="icon">{{ icon }}</v-icon>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: 'radio' //radio or checkbox
    },
    bgColor: {
      type: String,
      required: true,
      default: 'blue'
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    options: {
      type: Array,
      required: true,
      default: null
    },
    model: {
      type: [String, Number, Array],
      required: false,
      default: null
    }
  },
  data() {
    return {
      selectedOption: null
    }
  },
  created() {
    this.selectedOption = this.model
      ? this.model
      : this.type === 'radio'
        ? 'any'
        : ['any']
  },
  methods: {
    isSelected(op) {
      if (this.type === 'radio') return this.selectedOption === op
      return this.selectedOption && this.selectedOption.indexOf(op) >= 0
    },
    checkAny() {
      let key
      if (
        (key = this.selectedOption.indexOf('any')) >= 0 &&
        this.selectedOption.length > 1
      ) {
        this.selectedOption.splice(key, 1)
      } else if (this.selectedOption.length === 0) {
        this.selectedOption = ['any']
      }
    },
    emitSelectedOption() {
      this.$emit('change', this.selectedOption)
    },
    setOption(op) {
      if (this.type == 'radio') {
        if (op === this.selectedOption) {
          this.selectedOption = 'any'
        } else {
          this.selectedOption = op
        }
        this.emitSelectedOption()
        return
      }
      let key
      if (op === 'any') {
        this.selectedOption = ['any']
      } else if ((key = this.selectedOption.indexOf(op)) >= 0) {
        this.selectedOption.splice(key, 1)
      } else {
        this.selectedOption.push(op)
      }
      this.checkAny()
      this.emitSelectedOption()
    }
  }
}
</script>

<style lang="stylus" scoped>
ul {
  list-style-type: none;
}

li {
  cursor: pointer;
  float: left;
  padding: 4px;
  border-radius: 2px;
  border: 1px solid #e1e1e1;
  color: #9f9f9f;
  margin: 0px 5px 10px 0px;
}

.v-icon {
  font-size: 16px;
  color: #9f9f9f;
}

.active {
  color: #fff;

  .v-icon {
    color: #fff;
  }
}
</style>

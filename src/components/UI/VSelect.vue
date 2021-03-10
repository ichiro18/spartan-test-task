<template>
  <div class="field field-select">
    <span v-if="inputLabel || label" class="label">{{ inputLabel || label}}<span v-if="required" class="required">*</span></span>
    <div class="control">
      <div :class="rootClasses" class="custom-select">
        <multiselect
          ref="multiselect"
          :name="name"
          :required="required"
          :options="options"
          :disabled="disabled"
          :taggable="taggable"
          :searchable="searchable"
          :track-by="trackBy"
          :value="model"
          :close-on-select="closeOnSelect"
          :label="label"
          :multiple="multiple"
          :status="status"
          :placeholder="placeholder"
          :loading="loading"
          :clear-on-select="clearOnSelect"
          :internalSearch="internalSearch"
          :group-select="groupSelect"
          :group-values="groupValues"
          :group-label="groupLabel"
          :preserve-search="preserveSearch"
          :max-height="320"
          @tag="onTag"
          @select="onChange"
          @close="onClose"
          @remove="onRemove"
          @open="onOpen"
        >
          <template slot="noOptions">Список пуст</template>
          <template slot="noResult">Не найдено</template>
          <template slot="option" slot-scope="props">
            <div class="option-desc" v-if="!multiple">
              <!-- this.icon -->
              <div class="select-icon select-left" v-if="iconLeft">
                <i :class="iconLeft"></i>
              </div>
              {{ props.option[label] || props.option.$groupLabel || props.option }}
            </div>
            <div class="option__desc" v-else>
              <input
                v-if="!props.option.$isLabel"
                type="checkbox"
                class="input__checkbox"
                :checked="model.indexOf(props.option) >= 0"
              />
              {{ props.option[label] || props.option.$groupLabel || props.option }}
            </div>
          </template>
          <template slot="singleLabel">
            <span v-html="value"/>
          </template>
          <template slot="caret" slot-scope="{ toggle }">
            <div @mousedown.prevent.stop="toggle" class="multiselect__select">
              <img src="/caret.svg" alt="-">
            </div>
          </template>
        </multiselect>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import VModelMixin from '@/common/mixins/VModelMixin';

export default {
  name:       'VSelect',
  components: {
    Multiselect,
  },
  mixins:     [VModelMixin,],
  props:      {
    name:           {
      type:    String,
      default: '',
    },
    options:        {
      type:     Array,
      required: true,
    },
    multiple:       {
      type:    Boolean,
      default: false,
    },
    message:        {
      type:    String,
      default: '',
    },
    inputLabel:     {
      type:    String,
      default: '',
    },
    closeOnSelect:  {
      type:    Boolean,
      default: true,
    },
    label:          {
      type:    String,
      default: '',
    },
    required:       {
      type:    Boolean,
      default: false,
    },
    taggable:       {
      type:    Boolean,
      default: false,
    },
    disabled:       {
      type:    Boolean,
      default: false,
    },
    searchable:     {
      type:    Boolean,
      default: true,
    },
    loading:        {
      type:    Boolean,
      default: false,
    },
    internalSearch: {
      type:    Boolean,
      default: true,
    },
    clearOnSelect:  {
      type:    Boolean,
      default: true,
    },
    trackBy:        {
      type:    String,
      default: '',
    },
    groupLabel:     {
      type:    String,
      default: '',
    },
    groupValues:    {
      type:    String,
      default: '',
    },
    placeholder:    {
      type:    String,
      default: '',
    },
    groupSelect:    {
      type:    Boolean,
      default: false,
    },
    iconLeft:       {
      type:    String,
      default: '',
    },
    preserveSearch: {
      type:    Boolean,
      default: false,
    },
    status:         {
      type:      String,
      default:   'default',
      validator: value => {
        return ['error', 'success', 'info', 'warning', 'danger', 'primary', 'default',].indexOf(value) >= 0;
      },
    },
  },
  methods:    {
    onTag(event) {
      this.$emit('tag', event);
    },
    onChange(event) {
      if (!this.multiple) {
        this.change(event);
      } else {
        this.model.push(event);
        this.$emit('input', this.model);
      }
    },
    onClose(event) {
      this.$emit('close', event);
    },
    onRemove(event) {
      if (this.multiple) {
        const index = this.model.indexOf(event);
        this.model.splice(index, 1);
      }
    },
    onOpen() {
      this.$emit('open', this.$refs.multiselect);
    },
  },
  computed:   {
    rootClasses() {
      const baseClass = 'select';
      const res = [baseClass,];
      if (this.status) {
        res.push(`is-${this.status}`);
      }
      return res;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/config/_variables.scss";

.field-select{
  width: 100%;
  .label{
    .required {
      color: red;
    }
  }
  .custom-select {
    width: 100%;
    display: table;

    .multiselect {
      box-sizing: content-box;
      display: block;
      position: relative;
      width: 100%;
      min-height: 40px;
      text-align: left;
      color: $text-primary;

      &--active {
        .multiselect__tags {
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
        }
      }
    }

    .multiselect__select {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 100%;
      right: 23px;
      padding: 0;
      transform-origin: center;
      &:before {
        display: none;
      }
    }

    .multiselect__tags {
      display: block;
      min-height: 45px;
      padding: 13px 63px 0 23px;
      border-radius: 100px;
      border: 1px solid $text-inactive;
      background: transparent;
      font-size: 14px;
      cursor: pointer;

      .multiselect__single {
        background: transparent;
      }
    }

    .multiselect__content-wrapper {
      top: 0;
      margin-top: 0;
      border-radius: 18px;
      box-shadow: 0 10px 14px rgba(0, 0, 0, 0.5);
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #000000;
      box-sizing: border-box;
      border: 0.5px solid #4F4F4F;
      max-height: 320px;
      .multiselect__content {
        margin: 0;
        padding: 35px 0;
      }

      .multiselect__element + .multiselect__element {
          margin-top: 24px;
      }
      .multiselect__option {
        min-height: 1rem;
        padding: 4px 8px 6px;
        line-height: normal;
        text-align: center;

        &:hover,
        &--selected {
          background: transparent;
          color: $text-primary;
          font-weight: bold;
        }

        &--group {
          &.multiselect__option--disabled {
            color: $text-inactive;
            font-weight: bold;
          }
        }

        &--highlight {
          color: $text-primary;
          background: transparent;
        }

        &:after {
          display: none !important;
        }

        .option__desc {
          display: flex;
          align-items: center;
        }
      }
    }

    &.is-primary {
      .multiselect {
        border-color: #00d1b2;
      }
    }
    &.is-info {
      .multiselect {
        border-color: #238cd1;
      }
    }
    &.is-danger {
      .multiselect {
        border-color: #ef2e55;
      }
    }
    &.is-warning {
      .multiselect {
        border-color: #ffd83d;
      }
    }
    &.is-success {
      .multiselect {
        border-color: #3abb67;
      }
    }
  }
}
</style>

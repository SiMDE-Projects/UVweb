const AppSelect = Vue.component('app-select', {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
        unselectOnClick: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                ? this.options[0].name
                : null,
            open: false,
        };
    },
    template: `
        <div class="select" :tabindex="tabindex" @blur="open = false">
            <div class="selected" :class="{ open: open }" @click="open = !open">{{ selected }}</div>
            <div class="items" :class="{ selectHide: !open }">
                <div
                    v-for="(option, i) of options"
                    :key="i"
                    @click="
                    unselectOnClick && selected
                        ? slected = null
                        : selected = option.name;
                        open = false;
                        $emit('input', option.name);
                    "
                >
                    {{ option.label }}
                </div>
            </div>
        </div>`,
    mounted() {
        this.$emit("input", this.selected);
    },
});
<template>
  <base-card class="days-card">
    <router-link class="days-card__link" :to="day_id">
      <div class="days-card__title">
        <div class="days-card__title__infos">
          <h2 class="days-card__title__infos_header">{{ dayNumber }}</h2>
          <p v-if="dayViewed" class="days-card__title__infos_text_viewed">
            Viewed
          </p>
          <p v-else class="days-card__title__infos_text">Not viewed</p>
        </div>
        <h4>{{ dayName }}</h4>
        <p class="days-card__category">{{ dayCategory }}</p>
      </div>
      <ul class="days-card__sub-category-list">
        <li
          class="days-card__sub-category-list__item"
          v-for="daySubCategory in daySubCategories"
          :key="daySubCategory"
        >
          {{ daySubCategory }}
        </li>
      </ul>
    </router-link>
  </base-card>
</template>

<script>
export default {
  props: {
    dayNumber: {
      type: String,
      required: true,
    },
    dayName: {
      type: String,
      required: true,
    },
    dayCategory: {
      type: String,
      required: true,
    },
    dayId: {
      type: String,
      required: true,
    },
    daySubCategories: {
      type: Array,
      required: true,
    },
    dayViewed: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    day_id() {
      return "/days/" + this.dayId;
    },
  },
};
</script>

<style scoped>
.days-card__link,
.days-card__link:visited {
  text-decoration: none;
  outline: none;
  color: #2c3e50;
  transition: color 0.2s ease-in;
}
/* Will need to work on this hover thing for subcateogries another time */
.days-card:hover > .days-card__sub-category-list__item {
  border: 1px solid white;
}
.days-card:hover {
  background: #78c594;
  color: white;
}

.days-card {
  transition: all 0.2s ease-in;
  border-radius: 10px;
  padding: 5px;
}

@media screen and (max-width: 960px) {
  .days-card {
    margin: 10px 0;
  }

  .days-card__title {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .days-card__category {
    align-self: center;
  }
}
.days-card__sub-category-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}
.days-card__sub-category-list__item {
  background-color: #78c594;
  color: white;
  border-radius: 30px;
  padding: 5px;
}
.days-card__title__infos {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.days-card__title__infos_header,
.days-card__title__infos_text,
.days-card__title__infos_text_viewed {
  margin-bottom: 0;
}

.days-card__title__infos_text {
  font-weight: 500;
  font-style: italic;
}
.days-card__title__infos_text_viewed {
  font-weight: 500;
  font-style: italic;
  color: #78c594;
}
</style>

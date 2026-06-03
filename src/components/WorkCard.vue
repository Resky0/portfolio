<template>
  <div class="work-card">
    <div class="work-image">
      <img :src="work.image" :alt="`${work.title} 项目截图 - ${work.tags.slice(0, 3).join(' / ')}`" />
      <div class="work-overlay">
        <RouterLink :to="{ name: 'WorkDetail', params: { slug: work.slug } }" class="work-link">查看详情 →</RouterLink>
      </div>
    </div>
    <div class="work-content">
      <h3 class="work-title">{{ work.title }}</h3>
      <p class="work-description">{{ work.description }}</p>
      <ul v-if="visibleHighlights.length" class="work-highlights">
        <li v-for="highlight in visibleHighlights" :key="highlight">{{ highlight }}</li>
      </ul>
      <div class="work-tags">
        <span v-for="tag in work.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WorkProject } from '../data/works'

const props = withDefaults(defineProps<{
  work: WorkProject
  highlightLimit?: number
}>(), {
  highlightLimit: Infinity
})

const visibleHighlights = computed(() => props.work.highlights.slice(0, props.highlightLimit))
</script>

<style scoped>
.work-card {
  height: 100%;
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.94), rgba(15, 23, 42, 0.92));
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.work-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-color: rgba(14, 165, 233, 0.36);
}

.work-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
  padding: 30px 10px 10px;
  background: #0b1220;
}

.work-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: linear-gradient(180deg, #182033, #101827);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.work-image::after {
  content: '';
  position: absolute;
  top: 11px;
  left: 14px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ef4444;
  box-shadow: 14px 0 #f59e0b, 28px 0 #22c55e;
}

.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  transition: transform 0.5s ease;
}

.work-card:hover .work-image img {
  transform: scale(1.04);
}

.work-overlay {
  position: absolute;
  inset: 30px 10px 10px;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.work-card:hover .work-overlay {
  opacity: 1;
}

.work-link {
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.work-link:hover {
  background: var(--primary-dark);
}

.work-content {
  padding: 1.5rem;
  display: flex;
  min-height: 330px;
  flex-direction: column;
}

.work-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.work-description {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.work-highlights {
  display: grid;
  gap: 0.5rem;
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
}

.work-highlights li {
  position: relative;
  padding-left: 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.55;
}

.work-highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.68em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tag {
  padding: 0.375rem 0.75rem;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
}
</style>

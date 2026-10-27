<script setup>
import { ref, computed } from 'vue';

// State definition
const coffeePrice = ref(3);
const coffeeQuantity = ref(4);

// Computed total price calculation
const totalPrice = computed(() => {
  return coffeePrice.value * coffeeQuantity.value;
});
</script>

<template>
    <!-- Lesson -->
    <div class="lesson">
        <h1>Computed lesson</h1>
        <h2>what is computed:</h2>
        <p>A computed property is a value that Vue calculate from other reactive values
        and automatically updates when its dependencies change.
        </p>
        <h3>Example:</h3>
    </div>

  <div class="code-lesson-card">
    <!-- Left Column: Code Block -->
    <div class="code-pane">
      <div class="pane-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="pane-title">Script Setup (Vue 3)</span>
      </div>
      <pre class="code-content"><code><span class="keyword">import</span> { ref, computed } <span class="keyword">from</span> <span class="string">'vue'</span>;

<span class="keyword">const</span> coffeePrice = <span class="function">ref</span>(<span class="number">{{ coffeePrice }}</span>);
<span class="keyword">const</span> coffeeQuantity = <span class="function">ref</span>(<span class="number">{{ coffeeQuantity }}</span>);

<span class="keyword">const</span> totalPrice = <span class="function">computed</span>(() =&gt; {
  <span class="keyword">return</span> coffeePrice.<span class="property">value</span> * coffeeQuantity.<span class="property">value</span>;
});</code></pre>
    </div>

    <!-- Right Column: Interactive Output Preview -->
    <div class="output-pane">
      <div class="pane-header">
        <span class="pane-title">Live Output</span>
        <span class="status-badge">Reactive</span>
      </div>
      
      <div class="preview-content">
        <!-- Controls to test interactivity -->
        <div class="control-group">
          <label>
            Coffee Price ($):
            <input type="number" v-model.number="coffeePrice" min="0" />
          </label>
        </div>

        <div class="control-group">
          <label>
            Quantity:
            <input type="number" v-model.number="coffeeQuantity" min="0" />
          </label>
        </div>

        <hr class="divider" />

        <!-- Output Display -->
        <div class="result-display">
          <span class="result-label">Computed Total Price:</span>
          <span class="result-value">${{ totalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-lesson-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  max-width: 900px;
  margin: 1rem auto;
}

@media (min-width: 768px) {
  .code-lesson-card {
    grid-template-columns: 1fr 1fr;
  }
}

/* Header Styling */
.pane-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background-color: #1e1e2e;
  border-bottom: 1px solid #313244;
}

.pane-title {
  font-size: 0.85rem;
  color: #a6adc8;
  font-weight: 600;
}

/* Dots for Code Editor Look */
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot.red { background-color: #f38ba8; }
.dot.yellow { background-color: #f9e2af; }
.dot.green { background-color: #a6e3a1; }

/* Code Left Pane */
.code-pane {
  background-color: #181825;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.code-content {
  margin: 0;
  padding: 1rem;
  color: #cdd6f4;
  font-family: "Fira Code", Monaco, Consolas, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
}

/* Code Syntax Highlighting colors */
.keyword { color: #cba6f7; }
.string { color: #a6e3a1; }
.function { color: #89b4fa; }
.number { color: #fab387; }
.property { color: #f9e2af; }

/* Live Output Right Pane */
.output-pane {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.output-pane .pane-header {
  background-color: #f5f5f7;
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
}

.output-pane .pane-title {
  color: #333;
}

.status-badge {
  font-size: 0.75rem;
  background-color: #e6f4ea;
  color: #1e8e3e;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
}

.preview-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.control-group label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #444;
}

.control-group input {
  width: 80px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
}

.divider {
  border: 0;
  border-top: 1px solid #eee;
  margin: 0.5rem 0;
}

.result-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 4px solid #42b883; /* Vue green */
}

.result-label {
  font-weight: 600;
  color: #333;
}

.result-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #42b883;
}
</style>
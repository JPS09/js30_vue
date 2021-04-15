<template>
  <teleport to="body">
    <dialog open>
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <base-button>Yes I am sure</base-button>
        <base-button>No I am not</base-button>
      </menu>
    </dialog>
  </teleport>
</template>

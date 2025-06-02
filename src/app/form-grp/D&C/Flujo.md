

```mermaid
graph TD
    A[FormGroup] --> B{Propósito};
    B --> C[Define un grupo de elementos de entrada];
    C --> D[Fijo y Estático];
    C --> E[Se administran juntos];

    A --> F{Anidamiento};
    F --> G[Puede anidarse un FormGroup];

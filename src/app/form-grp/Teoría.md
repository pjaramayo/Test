# FormGroup.
1. Define un grupo de elementos de entradas fijo. estático que se administran juntos.
2. Se puede anidar un grupo de formularios.



```mermaid
graph TD
    A[FormGroup] --> B{Propósito};
    B --> C[Define un grupo de elementos de entrada];
    C --> D[Fijo y Estático];
    C --> E[Se administran juntos];

    A --> F{Anidamiento};
    F --> G[Puede anidarse un FormGroup];

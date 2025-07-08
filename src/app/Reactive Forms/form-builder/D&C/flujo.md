```mermaid
graph TD
    A[Angular Forms] --> B[ReactiveFormsModule];

    subgraph MODELO Lógica y Estructura de Datos 
      
        B --> C[FormGroup];
        B --> D[FormControl];
        B --> E[FormArray];
    
    end
    %% Asegúrate de que aquí HAYA UN SALTO DE LÍNEA ANTES de la siguiente instrucción.

    subgraph VISTA Plantilla HTML
        G[Directiva <br> formControlName];
        H[Directiva <br> formGroupName];
    end
    %% Asegúrate de que aquí HAYA UN SALTO DE LÍNEA ANTES de la siguiente instrucción.

    %% Conexiones que fuerzan la jerarquía visual
  
  G --> F;
  H --> D
  
  I[AbstractControl] --> C[FormGroup]
  I[AbstractControl] --> D[FormControl]
  I[AbstractControl] --> E[FormControl]
   

    %% Estilos para diferenciar y destacar
    style A fill:#5f3dc4,stroke:#f1f3f5,stroke-width:2px;
    style B fill:#00b4d8,stroke:#0096c7,stroke-width:2px;
    style C fill:1f271b,stroke:#adb5bd,stroke-width:2px;
    style D fill:1f271b,stroke:#adb5bd,stroke-width:2px;
    style E fill:1f271b,stroke:#adb5bd,stroke-width:2px;
    style F fill:1f271b,stroke:#adb5bd,stroke-width:2px;

    style G fill:#f59f00,stroke:#e08e00,stroke-width:2px;
    style H fill:#f59f00,stroke:#e08e00,stroke-width:2px;

    
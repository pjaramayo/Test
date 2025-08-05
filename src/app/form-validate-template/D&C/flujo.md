```mermaid
graph TD
I[Nivel 4 Analizar]

A[NG_VALIDATORS<br/>Token de identificacion] --> B[Validator<br>Clase];
A --> C[ValidatorFn<br/>Funcion Pura];
A --> D[ValidationErrors Objeto Javascript o Null ];

B[•Validator;<br>Clase] --> E[•validate, <br/> •AbstarcControl <br/> •ValidatorErrors, <br/> •null <br/> •return -> 'custom': true;];

C[ValidatorFn<br/>Funcion Pura] --> F[•AbstarcControl <br/> •ValidatorErrors, <br/> •null];

D[ValidationErrors Objeto Javascript o Null] --> G[Por valido Null];
D[ValidationErrors Objeto Javascript o Null] --> H[Por No valido];

  %% Estilos para diferenciar y destacar
    style A fill:#5f3dc4,stroke:#f1f3f5,stroke-width:2px;
    style B fill:#00b4d8,stroke:#0096c7,stroke-width:2px;
    style C fill:#00b4d8,stroke:#adb5bd,stroke-width:2px;
    style D fill:#00b4d8,stroke:#adb5bd,stroke-width:2px;
    style E fill:#f59f00,stroke:#adb5bd,stroke-width:2px;
    style F fill:#f59f00,stroke:#adb5bd,stroke-width:2px;

    style G fill:#f59f00,stroke:#e08e00,stroke-width:2px;
    style H fill:#f59f00,stroke:#e08e00,stroke-width:2px;

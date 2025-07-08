```mermaid
graph TD
    A[FormGroup] --> B{MODELO};
    B --> C[
    •import &lbrace;<br>FormGroup<br>FormControl<br>, ReactiveFormsModule &rbrace;<br>
    •new FormControl.
    ];


   C --> F{VISTA};
    F --> D[•FormGroup
           •formControlName
           ];
    
    D-->A
   


 style A fill:#5f3dc4,stroke:#f1f3f5,stroke-width:2px;
 style B fill:#1864ab,stroke:#f1f3f5,stroke-width:2px;
 style F fill:#f59f00,stroke:#f1f3f5,stroke-width:2px;
 ```

 
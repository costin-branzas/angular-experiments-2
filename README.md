# angular-experiments-2
dummy project for experimenting with modules, lazy loading and dynamic component loading

## requirements:
node 10.16.3 (maybe works with others, but only tested with this one)

## overview (may be outdated as project grows):
Project consists of:
 - 1 root module (AppModule) 
    - imported in this root module we also have:
        - a Services Module that inncludes ServiceA that will instantiate Base component declared in the CommonComponents Module
        - and a CommonComponents Module that include a BaseComponent
 - 2 separate lazy-loaded modules ModuleA and Module B.
    - each of the 2 modules have 2 components (Components A and B for ModuleA, Components B and C for ModuleB)


## setup:
npm install

## run:
ng serve

## demo for dynamic components:
- After running the aplication, go to ComponentA, -> Create a Dynamic Base Component, then you have 3 self-explanatory options:
    - Create Dynamic Sub Component With Local Resolver
    - Create Dynamic Sub Component With Received Resolver
    - Create Dynamic Sub Component With Portal
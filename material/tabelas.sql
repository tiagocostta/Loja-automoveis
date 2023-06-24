CREATE TABLE automoveis (
    id INTEGER PRIMARY KEY,
    modelo VARCHAR(155),
    preco VARCHAR(155)
);

CREATE TABLE concessionarias (
    id INTEGER PRIMARY KEY,
    concessionaria VARCHAR(155)
);

CREATE TABLE clientes (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(155)
);

CREATE TABLE alocacao (
    id INTEGER PRIMARY KEY,
    area INTEGER,
    automovel INTEGER,
    FOREIGN KEY(automovel) REFERENCES automoveis(id),
    concessionaria INTEGER,
    FOREIGN KEY(concessionaria) REFERENCES concessionarias(id),
    quantidade INTEGER
);
 

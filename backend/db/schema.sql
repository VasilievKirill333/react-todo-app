-- Схема базы данных для Todo API.
-- Применить: psql -h localhost -p <DB_PORT> -U <DB_USER> -d <DB_NAME> -f db/schema.sql

CREATE TABLE IF NOT EXISTS todos (
    id         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    text       TEXT        NOT NULL,
    done       BOOLEAN     NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT todos_text_not_blank CHECK (btrim(text) <> '')
);
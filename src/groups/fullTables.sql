CREATE TYPE curr_code AS ENUM (
    'RUB',
    'EUR',
    'USD',
    'THB',
    'NZD',
    'BYR',
    'KZT',
    'NOK',
    'UAH',
    'UZS',
    'GBP'
);

CREATE TABLE users (
    password    text        NOT NULL,
    login       text        NOT NULL,
    googleId    text        NOT NULL,

    id          smallserial PRIMARY KEY,
    createed    timestamp   NOT NULL,
    name        text        DEFAULT "",
);

CREATE TABLE groups (
    id          smallserial PRIMARY KEY,
    private     boolean     DEFAULT true,
    currency    curr_code   NOT NULL,
    caption     text        DEFAULT "",
    comment     text        DEFAULT "",
);

CREATE TABLE user_groups (
    user_id     smallint    REFERENCES users (id)   ON UPDATE CASCADE ON DELETE CASCADE,
    group_id    smallint    REFERENCES groups (id)  ON UPDATE CASCADE ON DELETE CASCADE,
    owner       boolean     DEFAULT false,
    PRIMARY KEY (user_id, group_id)
);

CREATE TABLE transactions (
    id          serial      PRIMARY KEY,
    user_id     smallint    REFERENCES users (id)   ON UPDATE CASCADE ON DELETE SET NULL    DEFERRABLE INITIALLY IMMEDIATE,
    group_id    smallint    REFERENCES groups (id)  ON UPDATE CASCADE ON DELETE CASCADE     DEFERRABLE INITIALLY IMMEDIATE,

    time        timestamp with time zone   NOT NULL,
    value       money       NOT NULL,
    caption     text        DEFAULT "", -- желательна автоподстановка
    comment     text        DEFAULT "",
    tags        text[]      DEFAULT [], -- желательна автоподстановка
);

DELETE FROM groups WHERE id NOT IN SELECT DISTINCT group_id FROM user_groups; -- Выполнять после каждого удаления юзера, или пары user_groups (выход юзера из группы)

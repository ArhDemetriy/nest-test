CREATE TABLE users (
    id          smallserial PRIMARY KEY
);

CREATE TABLE groups (
    id          smallserial PRIMARY KEY
);

CREATE TABLE user_groups (
    user_id     smallint    REFERENCES users (id)   ON UPDATE CASCADE ON DELETE CASCADE,
    group_id    smallint    REFERENCES groups (id)  ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (user_id, group_id)
);

CREATE TABLE transactions (
    id          serial      PRIMARY KEY,
    user_id     smallint    REFERENCES users (id)   ON UPDATE CASCADE ON DELETE SET NULL    DEFERRABLE INITIALLY IMMEDIATE,
    group_id    smallint    REFERENCES groups (id)  ON UPDATE CASCADE ON DELETE CASCADE     DEFERRABLE INITIALLY IMMEDIATE
);

DELETE FROM groups WHERE id NOT IN SELECT DISTINCT group_id FROM user_groups; -- Выполнять после каждого удаления юзера

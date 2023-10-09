
# Bet House - Quer apostar quanto?

Apostar com os amigos no resultado de um jogo de futebol nunca sai de moda, mas nos últimos anos, essa tradição ganhou uma nova dimensão com o avanço da tecnologia. A aplicação back-end "Bet House" oferece uma plataforma emocionante e conveniente para apostas esportivas.

Nessa aplicação uma série de eventos esportivos que vão acontecer aparecem para o usuário. Ele pode fazer uma aposta dentro de um evento esportivo (por exemplo, em quem será o vencedor entre uma partida de futebol do Flamengo contra o Botafogo).

O evento esportivo acontece e, caso o usuário tenha acertado, recebe um valor!!

Abrace a empolgação, faça suas apostas e torça pelo sucesso de sua equipe favorita!

Deploy : https://bet-house-pnjb.onrender.com



## Tecnologias
<p>
<img src="https://img.shields.io/badge/-Javascript-F7DF1E?logo=javascript&logoColor=white"  alt="JavaScript" width="100" height="30">
<img src="https://img.shields.io/badge/-Node-339933?logo=nodedotjs&logoColor=white" width="80" height="30">
<img src="https://img.shields.io/badge/-Typescript-3178C6?logo=typescript&logoColor=white" width="100" height="30">
<img src="https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white" width="100" height="30">
<img src="https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=white" width="80" height="30">

</p>

creating a volume

```docker volume create volume-name ```

creating a network

```docker network create network-name```

image run by local build

run on project root

```bash
  docker built -t image-name .
```
create a network
create a volume

run postgres container

```bash
  docker run \
  --name container-name \
  --network my-network \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=mydb \
  -p 5432:5432 \
  -v volume-name:/var/lib/postgresql/data \
  postgres

```

run image

```bash
docker run \
--name container-name \
--network network-name \
-e DATABASE_URL=postgres://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_CONTAINER_NAME}:{POSTGRES_CONTAINER_PORT}/{POSTGRES_DB} \
-p 4000:4000 image-name

```

run by a deployed image on dockerhub
(same stetps, less then image-name)

run image

```bash
docker run \
--name container-name \
--network network-name \
-e DATABASE_URL=postgres://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_CONTAINER_NAME}:{POSTGRES_CONTAINER_PORT}/{POSTGRES_DB} \
-p 4000:4000 csjhonathan/footbet
```
# Bet-House

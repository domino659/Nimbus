import fs from 'fs';

export default function generateDockerComposeFile(
  stack,
  backendPort,
  frontendPort,
  containerName
) {
  let backendService = '';

  if (stack === 'go') {
    backendService = `
  go:
    build:
      context: ./back
    container_name: ${containerName}_backend
    ports:
      - '${backendPort}:4000'
    networks:
      - ${containerName}-network
      - db_db-network
`;
  } else {
    backendService = `
  node:
    build:
      context: ./back
    container_name: ${containerName}_backend
    ports:
      - '${backendPort}:4000'
    networks:
      - ${containerName}-network
      - db_db-network
`;
  }

  const yaml = `
version: '3.8'
services:${backendService}
  react:
    build:
      context: ./front
    container_name: ${containerName}_frontend
    ports:
      - '${frontendPort}:3000'
    networks:
      - ${containerName}-network

networks:
  ${containerName}-network:
  db_db-network:
    name: db_db-network
    external: true
`;

  /* const filePath = `../../file/${stack}/docker-compose.yml`; */

  /* fs.writeFile(filePath, yaml, (err) => {
    if (err) throw err;
    return `docker-compose.yml file has been saved to ${filePath}!`;
  }); */

  return Buffer.from(yaml);
}

// example usage:
/* generateDockerComposeFile('go', '4000', '3000', 'project');
generateDockerComposeFile('node', '4000', '3000', 'project'); */

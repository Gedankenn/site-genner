# =========================
# Projeto: site-genner
# =========================

SITE_DIR=site

.PHONY: help dev stop build docker-up docker-down clean

help:
	@echo ""
	@echo "Comandos disponíveis:"
	@echo "  make dev         -> roda o site em modo dev (npm run dev)"
	@echo "  make stop        -> para o dev server"
	@echo "  make build       -> builda o Next localmente"
	@echo "  make docker-up   -> sobe o site via Docker"
	@echo "  make docker-down -> derruba os containers"
	@echo "  make clean       -> remove node_modules e .next"
	@echo ""

# -------- LOCAL (sem Docker) --------

dev:
	cd $(SITE_DIR) && npm run dev

stop:
	@echo "Use CTRL+C no terminal onde o dev está rodando."

build:
	cd $(SITE_DIR) && npm run build

clean:
	rm -rf $(SITE_DIR)/node_modules $(SITE_DIR)/.next

# -------- DOCKER --------

docker-up:
	sudo docker-compose up --build

docker-down:
	sudo docker-compose down


run:
	yarn run dev


ip:
	ipconfig
	
build:
	yarn run build

serve:
	yarn run start

lint:
	yarn run lint

restore:
	yarn install

git:
	git add .
	git commit -m "ok"
	git push -u origin main 

html:
	yarn html

fix:
	touch public/.nojekyll

pub:
	make html
	make git



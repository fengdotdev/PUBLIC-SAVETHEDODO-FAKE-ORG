run:
	yarn run dev


ip:
	ipconfig getifaddr
	
build:
	yarn run build

serve:
	yarn run start

lint:
	yarn run lint

restore:
	yarn install

git:
	git add -A
	git commit -m "ok"
	git push -u origin main 

html:
	yarn html

fix:
	touch docs/.nojekyll

pub:
	make html
	make git



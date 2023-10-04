import app, { init } from './app';
import 'dotenv/config';

const port = +process.env.PORT || 4000;

init().then(() => {
	app.listen(port, () => {
		console.log(`Server is listening on port ${port}.`);
	});
});
export class Patterns {

	getPatterns()
	{
		return {
			email: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+',
			password: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#\$%\^\&\*\(\)_\-]{8,})$'
		}
	}
}

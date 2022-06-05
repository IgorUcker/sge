package br.com.sgelider.sge.conf.exception;

public class SgeException extends RuntimeException {
	
	private static final long serialVersionUID = 3975313764133148843L;

	public SgeException() {
		super();
	}

	public SgeException(String message) {
		super(message);
	}

	public SgeException(String message, Throwable exception) {
		super(message, exception);
	}

	public SgeException(Throwable exception) {
		super(exception);
	}
}

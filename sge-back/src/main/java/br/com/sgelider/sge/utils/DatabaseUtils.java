package br.com.sgelider.sge.utils;

import com.google.common.base.CaseFormat;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.Normalizer;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.regex.Pattern;


public class DatabaseUtils {
	
	  public static final String PATTERN_WITH_TIME = "yyyy-MM-dd'T'HH:mm:ssXXX";
	    public static final String PATTERN_WITHOUT_TIME = "yyyy-MM-dd";

	    public static String dateFormat(Object dt, String pattern) {
	        return dateFormat(dt, pattern, Locale.getDefault());
	    }

	    public static String dateFormat(Object dt, String pattern, Locale locale) {
	        if (dt == null) {
	            return null;
	        }

	        if (dt instanceof ZonedDateTime) {
	            return DateTimeFormatter.ofPattern(pattern, locale).format((ZonedDateTime) dt);
	        } else if (dt instanceof LocalDate) {
	            return DateTimeFormatter.ofPattern(pattern, locale).format((LocalDate) dt);
	        } else if (dt instanceof LocalDateTime) {
	            return DateTimeFormatter.ofPattern(pattern, locale).format((LocalDateTime) dt);
	        } else if (dt instanceof Date) {
	            return dateFormat(((Date) dt).toLocalDate(), pattern, locale);
	        } else if (dt instanceof Timestamp) {
	            return dateFormat(((Timestamp) dt).toLocalDateTime(), pattern, locale);
	        }

	        return dt.toString();
	    }

	    private static DateTimeFormatter getFormatterWhithTime(Locale locale) {
	        if (locale == null) {
	            locale = Locale.getDefault();
	        }

	        return DateTimeFormatter.ofPattern(PATTERN_WITH_TIME, locale);
	    }

	    private static DateTimeFormatter getFormatterWhithoutTime(Locale locale) {
	        if (locale == null) {
	            locale = Locale.getDefault();
	        }
	        return DateTimeFormatter.ofPattern(PATTERN_WITHOUT_TIME, locale);
	    }

	    public static String formatter(Object data, Locale locale) {
	        if (data == null || locale == null) {
	            return null;
	        }
	        if (data instanceof LocalDate) {
	            return getFormatterWhithoutTime(locale).format((LocalDate) data);
	        }
	        if (data instanceof LocalDateTime) {
	            return getFormatterWhithTime(locale).format(((LocalDateTime) data));
	        }
	        if (data instanceof ZonedDateTime) {
	            return getFormatterWhithTime(locale).format(((ZonedDateTime) data));
	        }

	        return null;
	    }

	    public static String formatter(Object data) {
	        return formatter(data, Locale.getDefault());
	    }

	    public static LocalDate ofLocalDate(String localDate, Locale locale) {
	        if (localDate == null) {
	            return null;
	        }

	        return LocalDate.parse(localDate, getFormatterWhithoutTime(locale));
	    }

	    public static LocalDate ofLocalDate(String localDate) {
	        return ofLocalDate(localDate, Locale.getDefault());
	    }

	    public static LocalDateTime ofLocalDateTime(String localDateTime, Locale locale) {
	        if (localDateTime == null) {
	            return null;
	        }

	        return LocalDateTime.parse(localDateTime, getFormatterWhithTime(locale));
	    }

	    public static LocalDateTime ofLocalDateTime(String localDateTime) {
	        return ofLocalDateTime(localDateTime, Locale.getDefault());
	    }

	    public static ZonedDateTime ofZonedDateTime(String zonedDateTime, Locale locale) {
	        if (zonedDateTime == null) {
	            return null;
	        }

	        return ZonedDateTime.parse(zonedDateTime, getFormatterWhithTime(locale));
	    }

	    public static ZonedDateTime ofZonedDateTime(String zonedDateTime) {
	        return ofZonedDateTime(zonedDateTime, Locale.getDefault());
	    }

	    public static ZonedDateTime ofZonedDateTime(String zonedDateTime, ZoneId zone) {
	        ZonedDateTime zdt = ofZonedDateTime(zonedDateTime);
	        return ofZonedDateTime(zdt.toInstant(), zone);
	    }

	    public static ZonedDateTime ofZonedDateTime(Instant instant, ZoneId zone) {
	        return ZonedDateTime.ofInstant(instant, zone);
	    }

	    public static ZonedDateTime ofZonedDateTime(LocalDateTime ldt, ZoneId zone) {
	        return ZonedDateTime.ofInstant(ldt.toInstant(ZoneOffset.UTC), zone);
	    }

	    public static Date toDate(LocalDate date) {
	        if (date == null) {
	            return null;
	        }
	        return Date.valueOf(date);
	    }

	    public static Time toTime(LocalTime time) {
	        if (time == null) {
	            return null;
	        }
	        return Time.valueOf(time);
	    }

	    public static Timestamp toTimestamp(LocalDateTime dateTime) {
	        if (dateTime == null) {
	            return null;
	        }
	        return Timestamp.valueOf(dateTime);
	    }

	    public static Timestamp toTimestampTz(ZonedDateTime dateTime) {
	        if (dateTime == null) {
	            return null;
	        }
	        return Timestamp.from(dateTime.toInstant());
	    }

	    public static ZonedDateTime toZonedDateTime(Timestamp dateTime) {
	        if (dateTime == null) {
	            return null;
	        }
	        return ZonedDateTime.ofInstant(dateTime.toInstant(), ZoneId.of("America/Sao_Paulo"));
	    }

	    public static LocalDateTime toLocalDateTime(Timestamp dateTime) {
	        if (dateTime == null) {
	            return null;
	        }
	        return dateTime.toLocalDateTime();
	    }

	    public static String normalizeDbName(String name) {
	        if (name == null || name.isEmpty()) {
	            return "";
	        }
	        name = name.toLowerCase();
	        String nfdNormalizedString = Normalizer.normalize(name, Normalizer.Form.NFD);
	        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
	        nfdNormalizedString = pattern.matcher(nfdNormalizedString).replaceAll("");

	        nfdNormalizedString = nfdNormalizedString
	                .replace("!", "")
	                .replace("@", "")
	                .replace("#", "")
	                .replace("$", "")
	                .replace("%", "")
	                .replace("^", "")
	                .replace("&", "")
	                .replace("*", "")
	                .replace("(", "")
	                .replace(")", "")
	                .replace("+", "")
	                .replace("=", "")
	                .replace("{", "")
	                .replace("}", "")
	                .replace("[", "")
	                .replace("]", "")
	                .replace("|", "")
	                .replace("\\", "")
	                .replace("/", "")
	                .replace("\"", "")
	                .replace("'", "")
	                .replace(".", "")
	                .replace(",", "")
	                .replace(":", "")
	                .replace(";", "")
	                .replace("<", "")
	                .replace(">", "")
	                .trim()
	                .replace(" ", "_");

	        return nfdNormalizedString;

	    }

	    public static String toSqlName(String objectName) {
	        return CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_UNDERSCORE, objectName);
	    	
	    	
	    }

	    public static String toObjectName(String sqlName) {
	        if (sqlName.contains("_")) {
	            return CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, sqlName);
	        }
	        return sqlName;
	    }

}
